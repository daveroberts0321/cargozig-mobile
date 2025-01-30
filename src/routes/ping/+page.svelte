<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <h1>Ping Status</h1>  
  <pre>{JSON.stringify(data, null, 2)}</pre>
</main>