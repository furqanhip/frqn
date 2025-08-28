// Lightweight shims for editor/TypeScript when full types are not resolved.
// Remove this once proper types are available from the project dependencies.
declare module 'react-native' {
    export const ScrollView: any;
  export const StyleSheet: {
    create: (s: any) => any;
  };
  export const Text: any;
  export const View: any;
  export const Image: any;
  export const Platform: any;
  export const ActivityIndicator: any;
  export const TouchableOpacity: any;
  export default any;
}
