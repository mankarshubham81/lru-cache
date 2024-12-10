class LRUCache<K, V> {
    private capacity: number;
    private cache: Map<K, V>;
  
    constructor(capacity: number) {
      if (capacity <= 0) {
        throw new Error("Capacity must be greater than zero.");
      }
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key: K): V | undefined {
      if (!this.cache.has(key)) return undefined;
      const value = this.cache.get(key)!;
      // Move the key to the end to mark it as recently used
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  
    set(key: K, value: V): void {
      if (this.cache.has(key)) {
        // Refresh position if the key exists
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // Remove the least recently used item (first key in Map)
        const oldestKey = this.cache.keys().next().value;
        if (oldestKey !== undefined) {
          this.cache.delete(oldestKey);
        }
      }
      this.cache.set(key, value);
    }
  
    has(key: K): boolean {
      return this.cache.has(key);
    }
  
    clear(): void {
      this.cache.clear();
    }
  }
  
  export default LRUCache;
  