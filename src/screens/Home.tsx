import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'
import { PlusCircle } from 'lucide-react-native'
import { useState } from 'react'
import { Task } from '../components/Task'

export function Home() {
  const [created, setCreated] = useState<string[]>([])
  const [done, setDone] = useState<string[]>([])
  const [tasks, setTasks] = useState<string[]>([])
  const [isDone, setIsDone] = useState<boolean>(false)

  const [isFocused, setIsFocused] = useState(false)

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
          />

          <TouchableOpacity style={styles.button}>
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
              isDone={isDone}
              onRemove={() => handleRemoveTask(item)}
              handleDone={() => handleDoneTask(item)}
              handleUndone={() => handleUndoneTask(item)}
            />
          )}
        />
      </View>
    </View>
  )
}
