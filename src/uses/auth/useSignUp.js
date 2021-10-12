import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@/configs/firebase'
const error = ref(null)
const isPending = ref(false)

async function signup (email, password, fullName) {
  isPending.value = true
  error.value = null
  const auth = getAuth()
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user, { displayName: fullName })
      return userCredential.user
    })
    .catch((err) => {
      error.value = err.message
      // eslint-disable-next-line no-return-assign
    }).finally(() =>
      isPending.value = false
    )
}

export function useSignUp () {
  return { error, isPending, signup }
}
