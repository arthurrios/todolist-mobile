import { Circle, Trash2 } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export interface TaskProps {
  task: string
  isDone: boolean
  handleUndone: () => void
  handleDone: () => void
  onRemove: () => void
}

export function Task({
  task,
  onRemove,
  isDone = false,
  handleDone,
  handleUndone,
}: TaskProps) {
  return (
    <>
      {isDone ? (
        <View style={styles.doneContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={handleUndone}>
            <View style={styles.iconBg} />
            <FontAwesomeIcon icon={faCircleCheck} color="#5E60CE" />
          </TouchableOpacity>
          <Text style={styles.textStrikeThrough}>{task}</Text>
          <TouchableOpacity onPress={onRemove}>
            <Trash2 size={14} color="#808080" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleDone}>
            <Circle size={17.45} color="#4EA8DE" />
          </TouchableOpacity>
          <Text style={styles.text}>{task}</Text>
          <TouchableOpacity onPress={onRemove}>
            <Trash2 size={14} color="#808080" />
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
