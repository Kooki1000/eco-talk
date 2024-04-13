import type { TextProps } from './themed';
import { Text } from './themed';

export function MonoText(props: TextProps) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
