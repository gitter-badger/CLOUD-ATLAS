declare module '*.svg' {
  // Note: rollup-image creates base64 encoded data uri
  const content: string;
  export default content;
}
