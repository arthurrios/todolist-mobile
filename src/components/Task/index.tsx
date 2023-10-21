import { Circle, Trash2 } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'

interface TaskProps {}

export function Task(props: TaskProps) {
  return (
    <View style={styles.container}>
      <Circle size={17.45} color="#4EA8DE" />
      <Text style={styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Trash2 size={14} color="#808080" />
    </View>
  )
}
