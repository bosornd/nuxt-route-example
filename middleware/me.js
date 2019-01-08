export default function ({store, redirect}) {
  const role = store.$auth.user.user.role
  const name = store.$auth.user.user.username
  return redirect('/' + role + 's/' + name)
}
