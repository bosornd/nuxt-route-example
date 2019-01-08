export default function ({route, store, redirect}) {
  if ( store.$auth.user.user.username !== route.params.user ){
    return redirect(route.path + '/about')
  }

  return
}
