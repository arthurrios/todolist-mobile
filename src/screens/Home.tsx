import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from './styles'
import { PlusCircle } from 'lucide-react-native'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <PlusCircle size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
