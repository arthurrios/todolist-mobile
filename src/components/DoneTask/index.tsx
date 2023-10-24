import { Trash2 } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

interface DoneTaskProps {}

export function DoneTask(props: DoneTaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBg} />
        <FontAwesomeIcon icon={faCircleCheck} color="#5E60CE" />
      </View>
      <Text style={styles.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Trash2 size={14} color="#808080" />
    </View>
  )
}
