import { Text as NativeBaseText } from "native-base";

const Green = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseText color="green.500" fontWeight="bold">
    {children}
  </NativeBaseText>
);

const Red = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseText color="danger.500" fontWeight="bold">
    {children}
  </NativeBaseText>
);

const Pink = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseText color="fuchsia.500" fontWeight="bold">
    {children}
  </NativeBaseText>
);

const Primary = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseText color="primary.500" fontWeight="bold">
    {children}
  </NativeBaseText>
);

const Text = {
  Green,
  Red,
  Pink,
  Primary,
};

export default Text;
export type TextType = keyof typeof Text;