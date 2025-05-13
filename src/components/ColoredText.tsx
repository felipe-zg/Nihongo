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

const Yellow = ({ children }: { children: React.ReactNode }) => (
  <NativeBaseText color="yellow.400" fontWeight="bold">
    {children}
  </NativeBaseText>
);

const ColoredText = {
  Green,
  Red,
  Pink,
  Primary,
  Yellow,
};

export default ColoredText;
export type TextType = keyof typeof ColoredText;