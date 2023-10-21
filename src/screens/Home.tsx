import { TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'
import { PlusCircle } from 'lucide-react-native'
import { useState } from 'react'

export function Home() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <Header />

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
    </View>
  )
}
