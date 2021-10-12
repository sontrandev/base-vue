import { ref } from 'vue'

export default function () {
  const transactions = ref([])
  const error = ref(null)
  const getFetchAll = async () => {
    try {
      const response = await fetch('http://localhost:3000/transactions')
      if (!response.ok) throw new Error('Something went wrong')
      transactions.value = await response.json()
    } catch (e) {
      error.value = e
    }
  }
  return { transactions, error, getFetchAll }
}
