import Text, { Props as TextProps } from '../Text';

type Props = Omit<TextProps, 'block' | 'as'>;

function Paragraph({ children, ...props }: Props) {
  return (
    <Text
      {...props}
      as="p"
    >
      {children}
    </Text>
  );
}
export default Paragraph;
