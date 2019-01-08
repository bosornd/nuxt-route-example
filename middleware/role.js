export default function ({route, store, redirect}) {
  const role = store.$auth.user.user.role
  return redirect('/' + role + 's/' + route.params.user)
}
