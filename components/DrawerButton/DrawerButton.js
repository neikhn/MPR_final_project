import { Pressable, Text } from 'react-native';
import styles from './styles';

export default function DrawerButton({ children }) {
  <Pressable
  style={({ pressed }) => [
    styles.linkButtonContainer,
    pressed ? styles.linkButtonContainerPressed : null,
  ]}
  >
    <Text
      style={({ pressed }) => [
        styles.linkButtonText,
        pressed ? styles.linkButtonTextPressed : null,
      ]}
    >
      { children }
    </Text>
  </Pressable>
};