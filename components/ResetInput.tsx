import { TouchableOpacity, Text } from 'react-native';

interface ResetProps {
    onPress: () => void;
  }
  
  const Reset: React.FC<ResetProps> = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text>Reset</Text>
      </TouchableOpacity>
    );
  };
export default Reset;