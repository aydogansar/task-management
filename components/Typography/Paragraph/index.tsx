import Text, { Props as TextProps } from '../Text';

type Props = Omit<TextProps, 'block'>;

function Paragraph({ children, ...props }: Props) {
  return (
    <Text
      as="p"
      {...props}
    >
      {children}
    </Text>
  );
}
export default Paragraph;
