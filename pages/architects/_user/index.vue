<template>
<pre>
  아키텍트({{$route.params.user}})의 메인 페이지 입니다.
</pre>
</template>

<script>
export default {
  middleware: [
    'auth',
    'about',    // makes route to '/about' if user is not the owner
  ],
}
</script>
