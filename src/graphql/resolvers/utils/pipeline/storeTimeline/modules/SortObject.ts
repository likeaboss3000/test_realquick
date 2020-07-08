export class SortObject {
  static builder() {
    return { $sort: { sortAt: -1, _id: -1 } };
  }
}
