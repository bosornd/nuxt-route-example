<template>
<pre>
  교수({{$route.params.user}})의 소개 페이지 입니다.
</pre>
</template>

<script>
export default {
  middleware: ['auth'],
}
</script>
