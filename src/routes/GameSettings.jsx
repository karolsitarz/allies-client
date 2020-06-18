import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'components/Container';
import Button from 'components/Button';
import { setRoute, ROUTES } from 'stores/route';
import useSocket from 'hooks/useSocket';
import Toggle from 'components/Toggle';
import Space from 'components/Space';
import RoleSettings, {
  RoleStatic,
  RoleContainer,
  RoleName,
  StaticValue,
} from 'components/RoleSettings';
import MSG from 'util/msg';

const RoleSettingsContainer = styled.div`
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => disabled && '0.33'};
  transition: ${({ theme }) => theme.transition()};
  width: 100%;
`;

const GameSettings = () => {
  const [socket] = useSocket();
  const dispatch = useDispatch();
  const playersCount = useSelector((state) => state.room.players.length);
  const savedSettings = useSelector((state) => state.settings);
  const [auto, setAuto] = useState(savedSettings.auto);

  const settingsReducer = (state, setting) => ({ ...state, ...setting });
  const [settings, setSettings] = useReducer(settingsReducer, {
    killer: savedSettings.killer,
    doctor: savedSettings.doctor,
    cop: savedSettings.cop,
    nitwit: savedSettings.nitwit,
    cabby: savedSettings.cabby,
    sniper: savedSettings.sniper,
  });

  const updateSettings = (role, value) => {
    setSettings({ [role]: value });
  };

  const handleQuitSettings = () => dispatch(setRoute(ROUTES.ROOM.LOBBY));
  const handleSendSettings = () =>
    min <= 20 &&
    socket.comm(
      MSG.ROOM.SETTINGS.SEND,
      auto ? { auto } : { auto, ...settings }
    );

  const min = Object.values(settings).reduce((acc, val) => acc + val, 0);

  return (
    <Container>
      <RoleContainer>
        <RoleName>default game</RoleName>
        <Toggle selected={auto} onClick={() => setAuto(!auto)} />
      </RoleContainer>

      <Space size="1.5em" />

      <RoleSettingsContainer disabled={auto}>
        <RoleSettings
          role="killer"
          min={1}
          onSelect={(val) => updateSettings('killer', val + 1)}
          initial={settings.killer - 1}
        />
        {['doctor', 'cop', 'nitwit', 'cabby', 'sniper'].map((role) => (
          <RoleSettings
            key={role}
            role={role}
            onSelect={(val) => updateSettings(role, val)}
            initial={settings[role]}
          />
        ))}
        <RoleStatic
          role="citizen"
          count={playersCount > min ? playersCount - min : 0}
        />

        <Space size="0.5em" />

        <RoleContainer>
          <RoleName>Min. players</RoleName>
          <StaticValue count={min} />
        </RoleContainer>
      </RoleSettingsContainer>

      <Space size="1.5em" />

      <Button onClick={handleSendSettings} primary>
        save
      </Button>
      <Button onClick={handleQuitSettings}>cancel</Button>
    </Container>
  );
};

export default GameSettings;
