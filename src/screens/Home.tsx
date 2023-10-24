import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'
import { PlusCircle } from 'lucide-react-native'
import { useState } from 'react'
import { Task } from '../components/Task'
import { DoneTask } from '../components/DoneTask'

export function Home() {
  const [created, setCreated] = useState(0)
  const [done, setDone] = useState(0)

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
              <Text style={styles.quantity}>{created}</Text>
            </View>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.doneText}>Concluídas</Text>
            <View style={styles.quantityNumberBg}>
              <Text style={styles.quantity}>{done}</Text>
            </View>
          </View>
        </View>

        <Task />
        <Task />
        <Task />
        <DoneTask />
        <DoneTask />
      </View>
    </View>
  )
}
