export async function fetchStore(
  parent,
  { storeId }: { storeId: string },
  { ReadModel }
) {
  try {
    // Fetch profile
    const store = await ReadModel.fetchStore({ storeId });
    if (!store) {
      const err = new Error('Store not found');
      err.name = 'QueryError';
      throw err;
    }
    return { status: 200, store, userErrors: [] };
  } catch (e) {
    console.log(e);
    return { status: 400, userErrors: [{ type: e.name, message: e.message }] };
  }
}
