import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'
import { PlusCircle } from 'lucide-react-native'
import { useState } from 'react'
import { Task } from '../components/Task'
import { SvgXml } from 'react-native-svg'

const EmptyIcon = `<svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0.5" width="56" height="56" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_401_140" transform="scale(0.01)"/>
</pattern>
<image id="image0_401_140" width="100" height="100" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`

export function Home() {
  const [created, setCreated] = useState<string[]>([])
  const [done, setDone] = useState<string[]>([])
  const [tasks, setTasks] = useState<string[]>([])
  const [taskText, setTaskText] = useState('')

  const [isFocused, setIsFocused] = useState(false)

  function handleAddTask() {
    if (tasks.includes(taskText)) {
      return Alert.alert(
        'Tarefa Existe',
        'Já existe uma tarefa na lista com esse nome',
      )
    }
    setCreated((prevState) => [...prevState, taskText])
    setTasks((prevState) => [...prevState, taskText])
    setTaskText('')
  }

  function handleDoneTask(task: string) {
    setDone((prevState) => [...prevState, task])
    setCreated((prevState) => prevState.filter((item) => item !== task))
  }

  function handleUndoneTask(task: string) {
    setDone((prevState) => prevState.filter((item) => item !== task))
    setCreated((prevState) => [...prevState, task])
  }

  function handleIsDone(task: string) {
    if (done.includes(task)) {
      return true
    } else {
      return false
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={isFocused ? styles.inputFocus : styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={setTaskText}
            value={taskText}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <PlusCircle size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.taskQuantity}>
          <View style={styles.quantityContainer}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.quantityNumberBg}>
              <Text style={styles.quantity}>{created.length}</Text>
            </View>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.doneText}>Concluídas</Text>
            <View style={styles.quantityNumberBg}>
              <Text style={styles.quantity}>{done.length}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              isDone={handleIsDone(item)}
              onRemove={() => handleRemoveTask(item)}
              handleDone={() => handleDoneTask(item)}
              handleUndone={() => handleUndoneTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <SvgXml xml={EmptyIcon}></SvgXml>
              <Text style={styles.emptyTextOne}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTextTwo}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
