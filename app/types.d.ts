// Local quick module declarations to silence editor/type-checker errors in the workspace copy.
// These are lightweight fallbacks — prefer installing proper @types packages in a real project.

declare module 'react' {
  const React: any;
  export = React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-native' {
  const RN: any;
  export = RN;
}

declare module '@expo/vector-icons' {
  export const AntDesign: any;
  export const Entypo: any;
  export const FontAwesome: any;
  export const Ionicons: any;
  export const MaterialIcons: any;
  const _default: any;
  export default _default;
}
