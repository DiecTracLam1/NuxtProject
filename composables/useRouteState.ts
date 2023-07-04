export default () => {
  const router = useRouter();
  const queryState = useState<any>(
    "query",
    () => router.currentRoute.value.query
  );
  const setQuery = (query: any) => {
    queryState.value = { ...queryState.value, ...query };
  };

  const removeQuery = (key: string) => {
    delete queryState.value[key];
    queryState.value = { ...queryState.value };
  };

  return {
    queryState,
    setQuery,
    removeQuery
  };
};
