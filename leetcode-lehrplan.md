# LeetCode Lehrplan — DSA-Roadmap (365 Aufgaben)

> 17 Kategorien · 365 Aufgaben · ein Jahr Praxis (eine pro Tag)
> Reihenfolge der Kategorien: nach Verständnis-Schwierigkeit (Arrays → 2D DP)
> Innerhalb jeder Kategorie: Easy → Hard
> Quellen: Grind75 · NeetCode 250 · LeetCode-Klassiker
> **Keine Premium-Aufgaben** — alle frei zugänglich

---

## Verteilung

| Kategorie | Σ | Easy | Medium | Hard |
|---|---|---|---|---|
| 1. Arrays & Hashing | 28 | 16 | 10 | 2 |
| 2. Two Pointers | 15 | 7 | 7 | 1 |
| 3. Sliding Window | 14 | 3 | 9 | 2 |
| 4. Stack | 17 | 6 | 9 | 2 |
| 5. Binary Search | 19 | 8 | 8 | 3 |
| 6. Linked List | 22 | 10 | 9 | 3 |
| 7. Intervals | 11 | 2 | 7 | 2 |
| 8. Bit Manipulation | 16 | 11 | 4 | 1 |
| 9. Trees | 35 | 20 | 10 | 5 |
| 10. Tries | 6 | 1 | 3 | 2 |
| 11. Heap / Priority Queue | 16 | 5 | 8 | 3 |
| 12. Backtracking | 18 | 1 | 11 | 6 |
| 13. Graphs | 25 | 6 | 12 | 7 |
| 14. Advanced Graphs | 13 | 0 | 6 | 7 |
| 15. Greedy | 20 | 7 | 9 | 4 |
| 16. 1D Dynamic Programming | 47 | 13 | 25 | 9 |
| 17. 2D Dynamic Programming | 43 | 6 | 23 | 14 |
| **Σ** | **365** | **122** | **170** | **73** |

**Verteilung:** 33% Easy · 47% Medium · 20% Hard

---

## 1. Arrays & Hashing (28)

### Easy
- **[Two Sum](https://leetcode.com/problems/two-sum/)** — *Easy* — Standardbeispiel für „HashMap statt O(n²)-Loop".
- **[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)** — *Easy* — Erstkontakt mit HashSet als Werkzeug.
- **[Valid Anagram](https://leetcode.com/problems/valid-anagram/)** — *Easy* — Frequenz-Counting mit HashMap.
- **[Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)** — *Easy* — Triviale Array-Konstruktion zum Aufwärmen.
- **[Replace Elements with Greatest Element on Right Side](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)** — *Easy* — Rückwärts-Scan, Suffix-Aggregation.
- **[Length of Last Word](https://leetcode.com/problems/length-of-last-word/)** — *Easy* — String-Parsing, Edge Cases üben.
- **[Plus One](https://leetcode.com/problems/plus-one/)** — *Easy* — Carry-Propagation auf Array.
- **[Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)** — *Easy* — HashSet-Lookup, klassische Übung.
- **[Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)** — *Easy* — In-Place Modifikation mit Two Pointers.
- **[Move Zeroes](https://leetcode.com/problems/move-zeroes/)** — *Easy* — In-Place Verschiebung, Slow-/Fast-Pointer.
- **[Majority Element](https://leetcode.com/problems/majority-element/)** — *Easy* — Boyer-Moore-Voting, eleganter Trick.
- **[Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)** — *Easy* — Einführung in Prefix Sums.
- **[Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)** — *Easy* — Prefix Sum als Werkzeug.
- **[Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)** — *Easy* — Reine Prefix-Sum-Konstruktion.
- **[Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)** — *Easy* — In-Place mit Modulo-Trick.
- **[How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)** — *Easy* — Counting-Sort-Variante.

### Medium
- **[Group Anagrams](https://leetcode.com/problems/group-anagrams/)** — *Medium* — HashMap mit zusammengesetzten Schlüsseln.
- **[Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)** — *Medium* — Bucket Sort, vorbereitend für Heap.
- **[Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)** — *Medium* — Prefix/Suffix Products ohne Division.
- **[Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)** — *Medium* — HashSets in mehreren Dimensionen.
- **[Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)** — *Medium* — HashSet-Lookup als O(n)-Trick.
- **[Sort Colors](https://leetcode.com/problems/sort-colors/)** — *Medium* — Dutch National Flag, Three-Way Partitioning.
- **[Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)** — *Medium* — O(1)-Space-Trick.
- **[Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)** — *Medium* — Floyd's Cycle Detection auf Array.
- **[Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)** — *Medium* — Prefix Sum + HashMap.
- **[Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)** — *Medium* — Design-Problem, HashMap + Array Trick.

### Hard
- **[First Missing Positive](https://leetcode.com/problems/first-missing-positive/)** — *Hard* — O(n)-Time, O(1)-Space mit Index-Trick.
- **[Maximum Gap](https://leetcode.com/problems/maximum-gap/)** — *Hard* — Bucket Sort als O(n)-Approach.

---

## 2. Two Pointers (15)

### Easy
- **[Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)** — *Easy* — Konvergierende Pointer, Klassiker.
- **[Reverse String](https://leetcode.com/problems/reverse-string/)** — *Easy* — In-Place Umkehr.
- **[Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)** — *Easy* — Two Pointers von außen.
- **[Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)** — *Easy* — Backwards Merge.
- **[Remove Element](https://leetcode.com/problems/remove-element/)** — *Easy* — Slow-/Fast-Pointer.
- **[Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)** — *Easy* — Konvergierend mit Bedingung.
- **[Reverse String II](https://leetcode.com/problems/reverse-string-ii/)** — *Easy* — Two Pointers in Blöcken.

### Medium
- **[Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)** — *Medium* — Sortiertes Array → Two Pointers schlägt HashMap.
- **[3Sum](https://leetcode.com/problems/3sum/)** — *Medium* — Two Pointers in Outer Loop, Interview-Klassiker.
- **[Container With Most Water](https://leetcode.com/problems/container-with-most-water/)** — *Medium* — Greedy-Bewegung der Pointer.
- **[Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)** — *Medium* — Sortieren + Two Pointers.
- **[4Sum](https://leetcode.com/problems/4sum/)** — *Medium* — Erweiterung von 3Sum.
- **[3Sum Closest](https://leetcode.com/problems/3sum-closest/)** — *Medium* — Variante mit Tracking.
- **[Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)** — *Medium* — Greedy mit konvergierenden Pointern.

### Hard
- **[Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)** — *Hard* — Two Pointers + Maximum-Tracking.

---

## 3. Sliding Window (14)

### Easy
- **[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)** — *Easy* — Min-Tracking mit einem Pass.
- **[Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)** — *Easy* — Festes Window mit HashSet.
- **[Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)** — *Easy* — Festes Window, einfachstes.

### Medium
- **[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)** — *Medium* — Variables Window mit HashSet.
- **[Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)** — *Medium* — Window mit Max-Frequency.
- **[Permutation in String](https://leetcode.com/problems/permutation-in-string/)** — *Medium* — Festes Window, Frequenz-Vergleich.
- **[Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)** — *Medium* — Festes Window mit Counter.
- **[Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)** — *Medium* — Window mit max. zwei Distinct.
- **[Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)** — *Medium* — Window mit max. K Flips.
- **[Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)** — *Medium* — Multiplikatives Window.
- **[Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)** — *Medium* — Window mit Constraint.
- **[Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)** — *Medium* — Window mit Targets.

### Hard
- **[Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)** — *Hard* — Anspruchsvollstes Window-Problem.
- **[Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)** — *Hard* — Window mit Monotonic Deque.

---

## 4. Stack (17)

### Easy
- **[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)** — *Easy* — Stack-Matching, kanonisch.
- **[Baseball Game](https://leetcode.com/problems/baseball-game/)** — *Easy* — Einfaches Stack mit Operationen.
- **[Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)** — *Easy* — Strukturwechsel.
- **[Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)** — *Easy* — Umgekehrt.
- **[Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)** — *Easy* — Stack-basiertes String-Processing.
- **[Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)** — *Easy* — Stack-Kollaps.

### Medium
- **[Min Stack](https://leetcode.com/problems/min-stack/)** — *Medium* — Hilfs-Stack-Pattern.
- **[Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)** — *Medium* — Stack-basierte Auswertung.
- **[Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)** — *Medium* — Rekursion mit Constraints.
- **[Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)** — *Medium* — Erstkontakt mit Monotonic Stack.
- **[Car Fleet](https://leetcode.com/problems/car-fleet/)** — *Medium* — Stack + Sortieren.
- **[Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)** — *Medium* — Monotonic Stack auf zirkulärem Array.
- **[Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)** — *Medium* — Stack-Simulation.
- **[Decode String](https://leetcode.com/problems/decode-string/)** — *Medium* — Verschachtelte Stack-Verwaltung.
- **[Online Stock Span](https://leetcode.com/problems/online-stock-span/)** — *Medium* — Monotonic Stack im Stream.

### Hard
- **[Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)** — *Hard* — Schwerstes Monotonic-Stack-Problem.
- **[Basic Calculator](https://leetcode.com/problems/basic-calculator/)** — *Hard* — Verschachtelte Klammer-Auswertung.

---

## 5. Binary Search (19)

### Easy
- **[Binary Search](https://leetcode.com/problems/binary-search/)** — *Easy* — Reine Implementierung.
- **[Search Insert Position](https://leetcode.com/problems/search-insert-position/)** — *Easy* — Lower-Bound-Variante.
- **[First Bad Version](https://leetcode.com/problems/first-bad-version/)** — *Easy* — Predicate-basiert.
- **[Sqrt(x)](https://leetcode.com/problems/sqrtx/)** — *Easy* — Binary Search auf Antwort.
- **[Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)** — *Easy* — Variante von Sqrt(x).
- **[Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)** — *Easy* — Interaktive Binary Search.
- **[Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)** — *Easy* — Upper-Bound auf Zeichen.
- **[Arranging Coins](https://leetcode.com/problems/arranging-coins/)** — *Easy* — Binary Search auf Antwort.

### Medium
- **[Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)** — *Medium* — Index-Mapping auf 1D.
- **[Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)** — *Medium* — Binary Search auf Antwort.
- **[Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)** — *Medium* — Pivot-Logik.
- **[Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)** — *Medium* — Doppelte Fallunterscheidung.
- **[Find Peak Element](https://leetcode.com/problems/find-peak-element/)** — *Medium* — Binary Search ohne strikte Sortierung.
- **[Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)** — *Medium* — Binary Search auf Timestamps.
- **[Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)** — *Medium* — Binary Search auf Antwort.
- **[Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)** — *Medium* — Mit Duplikaten.

### Hard
- **[Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)** — *Hard* — Berüchtigt schwer.
- **[Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/)** — *Hard* — Drei Binary Searches kombiniert.
- **[Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)** — *Hard* — Binary Search auf Antwort.

---

## 6. Linked List (22)

### Easy
- **[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)** — *Easy* — Pointer-Manipulation 101.
- **[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)** — *Easy* — Dummy-Node-Pattern.
- **[Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)** — *Easy* — Floyd's Tortoise & Hare.
- **[Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)** — *Easy* — Fast/Slow-Technik.
- **[Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)** — *Easy* — Einfaches Skipping.
- **[Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)** — *Easy* — Mitte finden + umkehren.
- **[Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)** — *Easy* — Filter mit Dummy-Node.
- **[Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)** — *Easy* — Two Pointers mit Längenausgleich.
- **[Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)** — *Easy* — Bit-Shift während Traversal.
- **[Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)** — *Easy* — Trick: Wert kopieren.

### Medium
- **[Reorder List](https://leetcode.com/problems/reorder-list/)** — *Medium* — Drei Techniken kombiniert.
- **[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)** — *Medium* — Two Pointers mit Abstand.
- **[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)** — *Medium* — Listen-Addition mit Carry.
- **[Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)** — *Medium* — Floyd's mit Cycle-Start.
- **[Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)** — *Medium* — Teilbereich umkehren.
- **[Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)** — *Medium* — HashMap oder Interleaving.
- **[LRU Cache](https://leetcode.com/problems/lru-cache/)** — *Medium* — Doubly Linked List + HashMap, wichtigstes Design-Problem.
- **[Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)** — *Medium* — Paarweises Tauschen.
- **[Sort List](https://leetcode.com/problems/sort-list/)** — *Medium* — Merge Sort auf Linked List.

### Hard
- **[Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)** — *Hard* — Erweiterung von Reverse mit Gruppen.
- **[Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)** — *Hard* — Heap oder Divide & Conquer.
- **[LFU Cache](https://leetcode.com/problems/lfu-cache/)** — *Hard* — LRU + Frequency-Tracking.

---

## 7. Intervals (11)

### Easy
- **[Summary Ranges](https://leetcode.com/problems/summary-ranges/)** — *Easy* — Sortierte Sequenz in Bereiche fassen.
- **[Determine if Two Events Have Conflict](https://leetcode.com/problems/determine-if-two-events-have-conflict/)** — *Easy* — Einfacher Overlap-Check.

### Medium
- **[Insert Interval](https://leetcode.com/problems/insert-interval/)** — *Medium* — Drei-Phasen-Logik.
- **[Merge Intervals](https://leetcode.com/problems/merge-intervals/)** — *Medium* — Sortier-basiert, Grundlage.
- **[Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)** — *Medium* — Greedy mit End-Time-Sortierung.
- **[Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)** — *Medium* — Variante des Greedy-Patterns.
- **[Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)** — *Medium* — Two Pointers auf zwei Listen.
- **[Car Pooling](https://leetcode.com/problems/car-pooling/)** — *Medium* — Difference Array oder Sweep Line.
- **[Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)** — *Medium* — Greedy-Auswahl.

### Hard
- **[Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)** — *Hard* — Online-Verwaltung von Intervallen.
- **[Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)** — *Hard* — Offline + Heap.

---

## 8. Bit Manipulation (16)

### Easy
- **[Single Number](https://leetcode.com/problems/single-number/)** — *Easy* — XOR-Selbstauslöschung.
- **[Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)** — *Easy* — `n & (n-1)` Trick lernen.
- **[Reverse Bits](https://leetcode.com/problems/reverse-bits/)** — *Easy* — Bitweise Schiebeoperationen.
- **[Missing Number](https://leetcode.com/problems/missing-number/)** — *Easy* — XOR-Trick auf Index-Wert-Paaren.
- **[Hamming Distance](https://leetcode.com/problems/hamming-distance/)** — *Easy* — XOR + Popcount.
- **[Power of Two](https://leetcode.com/problems/power-of-two/)** — *Easy* — `n & (n-1) == 0` Trick.
- **[Power of Three](https://leetcode.com/problems/power-of-three/)** — *Easy* — Variante mit Iteration.
- **[Power of Four](https://leetcode.com/problems/power-of-four/)** — *Easy* — Erweiterung von Power of Two.
- **[Add Binary](https://leetcode.com/problems/add-binary/)** — *Easy* — Stringbasierte Addition mit Carry.
- **[Number Complement](https://leetcode.com/problems/number-complement/)** — *Easy* — Bit-Maskierung mit Highest-Bit.
- **[Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/)** — *Easy* — Shift + XOR Trick.

### Medium
- **[Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)** — *Medium* — Addition ohne `+`-Operator.
- **[Single Number II](https://leetcode.com/problems/single-number-ii/)** — *Medium* — Bit-Counting modulo 3.
- **[Single Number III](https://leetcode.com/problems/single-number-iii/)** — *Medium* — XOR + Bit-Partitionierung.
- **[Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)** — *Medium* — Common Prefix Trick.

### Hard
- **[Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)** — *Medium* — Mit Trie-Lösung Hard-Niveau.

---

## 9. Trees (35)

### Easy
- **[Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)** — *Easy* — Erste rekursive Baum-Operation.
- **[Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)** — *Easy* — Rekursion mit Aggregation.
- **[Same Tree](https://leetcode.com/problems/same-tree/)** — *Easy* — Strukturgleichheit prüfen.
- **[Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)** — *Easy* — Same Tree als Helper.
- **[Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)** — *Easy* — Globaler Zustand + Rekursion.
- **[Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)** — *Easy* — Höhe mit Balance-Check.
- **[Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)** — *Easy* — DFS oder BFS.
- **[Path Sum](https://leetcode.com/problems/path-sum/)** — *Easy* — Klassische DFS-Suche.
- **[Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)** — *Easy* — Spiegel-Vergleich.
- **[Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)** — *Easy* — Rekursive Konstruktion.
- **[Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)** — *Easy* — DFS mit Pfad-Akkumulation.
- **[Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)** — *Easy* — DFS mit Eltern-Kontext.
- **[Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)** — *Easy* — BST-Eigenschaften nutzen.
- **[Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)** — *Easy* — BST-Suche.
- **[Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)** — *Easy* — BST-Eigenschaften für LCA.
- **[Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)** — *Easy* — BFS mit Level-Aggregation.
- **[Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)** — *Easy* — Iterativ mit Stack.
- **[Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)** — *Easy* — Iterativ mit Stack.
- **[Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)** — *Easy* — Iterativ mit zwei Stacks.
- **[Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)** — *Easy* — Synchrone Rekursion.

### Medium
- **[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)** — *Medium* — Erstes BFS mit Queue.
- **[Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)** — *Medium* — Rekursion mit Min/Max-Bounds.
- **[Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)** — *Medium* — Bottom-up-Rekursion.
- **[Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)** — *Medium* — Rekursive Konstruktion.
- **[Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)** — *Medium* — BFS mit Letzte-pro-Level.
- **[Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)** — *Medium* — DFS mit Maximum-Tracking.
- **[Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)** — *Medium* — In-Order Traversal.
- **[Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)** — *Medium* — BFS mit Reverse pro Level.
- **[Path Sum II](https://leetcode.com/problems/path-sum-ii/)** — *Medium* — DFS mit Backtracking.
- **[Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)** — *Medium* — In-Place Tree-Manipulation.

### Hard
- **[Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)** — *Hard* — Globaler Zustand + Rekursion.
- **[Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)** — *Hard* — Design + DFS + String-Parsing.
- **[Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)** — *Hard* — DFS mit Sortierung.
- **[Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)** — *Medium* — In-Place mit Morris Traversal (Hard-Niveau).
- **[Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)** — *Hard* — Greedy DP auf Bäumen.

---

## 10. Tries (6)

### Easy
- **[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)** — *Easy* — Vorbereitung auf Tries, lösbar ohne Trie.

### Medium
- **[Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)** — *Medium* — Trie von Grund auf bauen, Pflichtaufgabe.
- **[Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)** — *Medium* — Trie + Wildcard via Backtracking.
- **[Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)** — *Medium* — Trie mit Wert-Aggregation.

### Hard
- **[Word Search II](https://leetcode.com/problems/word-search-ii/)** — *Hard* — Trie + DFS auf Grid, Endgegner.
- **[Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)** — *Hard* — Trie mit Palindrom-Erkennung.

---

## 11. Heap / Priority Queue (16)

### Easy
- **[Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)** — *Easy* — Min-Heap der Größe k.
- **[Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)** — *Easy* — Max-Heap-Simulation.
- **[Relative Ranks](https://leetcode.com/problems/relative-ranks/)** — *Easy* — Heap oder Sortieren.
- **[Take Gifts From the Richest Pile](https://leetcode.com/problems/take-gifts-from-the-richest-pile/)** — *Easy* — Max-Heap mit Update.
- **[The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)** — *Easy* — Heap mit Custom Sort.

### Medium
- **[K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)** — *Medium* — Heap mit Custom Comparator.
- **[Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)** — *Medium* — Heap vs. Quickselect.
- **[Task Scheduler](https://leetcode.com/problems/task-scheduler/)** — *Medium* — Heap + Greedy.
- **[Reorganize String](https://leetcode.com/problems/reorganize-string/)** — *Medium* — Greedy mit Max-Heap.
- **[Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)** — *Medium* — Heap mit Tiebreaker.
- **[Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)** — *Medium* — Min-Heap auf Indizes.
- **[Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)** — *Medium* — Greedy mit Heap.
- **[Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)** — *Medium* — Heap-basierte Sortierung.

### Hard
- **[Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)** — *Hard* — Two Heaps Pattern, kanonisch.
- **[IPO](https://leetcode.com/problems/ipo/)** — *Hard* — Two Heaps für Greedy.
- **[The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)** — *Hard* — Sweep Line + Heap.

---

## 12. Backtracking (18)

### Easy
- **[Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)** — *Easy* — Einfachstes Backtracking-Beispiel.

### Medium
- **[Subsets](https://leetcode.com/problems/subsets/)** — *Medium* — Standardtemplate, Pflichteinstieg.
- **[Combination Sum](https://leetcode.com/problems/combination-sum/)** — *Medium* — Backtracking mit Wiederverwendung.
- **[Permutations](https://leetcode.com/problems/permutations/)** — *Medium* — Klassik, mit/ohne `used`-Array.
- **[Word Search](https://leetcode.com/problems/word-search/)** — *Medium* — Backtracking auf Grid.
- **[Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)** — *Medium* — Substring-Splitting.
- **[Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)** — *Medium* — Mapping-basiertes Backtracking.
- **[Subsets II](https://leetcode.com/problems/subsets-ii/)** — *Medium* — Mit Duplikaten, Skip-Logik.
- **[Permutations II](https://leetcode.com/problems/permutations-ii/)** — *Medium* — Mit Duplikaten.
- **[Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)** — *Medium* — Mit Duplikaten.
- **[Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)** — *Medium* — Mit Constraints (k Zahlen).
- **[Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)** — *Medium* — String-Backtracking mit Validierung.

### Hard
- **[N-Queens](https://leetcode.com/problems/n-queens/)** — *Hard* — Klassischer Hardcore-Test.
- **[N-Queens II](https://leetcode.com/problems/n-queens-ii/)** — *Hard* — Variante mit nur Count.
- **[Word Break II](https://leetcode.com/problems/word-break-ii/)** — *Hard* — DFS + Memoization.
- **[Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)** — *Hard* — Backtracking auf 2D-Grid.
- **[Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)** — *Hard* — Backtracking mit Operatoren.
- **[Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)** — *Hard* — BFS oder Backtracking.

---

## 13. Graphs (25)

### Easy
- **[Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)** — *Easy* — Indegree/Outdegree-Trick.
- **[Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/)** — *Easy* — Trivial mit ersten zwei Edges.
- **[Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)** — *Easy* — Union-Find oder DFS.
- **[Island Perimeter](https://leetcode.com/problems/island-perimeter/)** — *Easy* — Grid-Traversal.
- **[Flood Fill](https://leetcode.com/problems/flood-fill/)** — *Easy* — DFS auf Grid.
- **[Employee Importance](https://leetcode.com/problems/employee-importance/)** — *Easy* — DFS auf Custom Graph.

### Medium
- **[Number of Islands](https://leetcode.com/problems/number-of-islands/)** — *Medium* — Erstes Grid-DFS.
- **[Clone Graph](https://leetcode.com/problems/clone-graph/)** — *Medium* — DFS/BFS mit Lookup-Map.
- **[Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)** — *Medium* — Multi-Source BFS.
- **[Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)** — *Medium* — Reverse-DFS.
- **[Course Schedule](https://leetcode.com/problems/course-schedule/)** — *Medium* — Cycle Detection.
- **[Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)** — *Medium* — Topological Sort Output.
- **[Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)** — *Medium* — DFS von Rand aus.
- **[Max Area of Island](https://leetcode.com/problems/max-area-of-island/)** — *Medium* — DFS mit Größen-Tracking.
- **[Number of Provinces](https://leetcode.com/problems/number-of-provinces/)** — *Medium* — Connected Components.
- **[Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)** — *Medium* — DFS-Erreichbarkeit.
- **[All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)** — *Medium* — DAG-Pfad-Enumeration.
- **[Redundant Connection](https://leetcode.com/problems/redundant-connection/)** — *Medium* — Union-Find Erstkontakt.

### Hard
- **[Word Ladder](https://leetcode.com/problems/word-ladder/)** — *Hard* — Implizit konstruierter Graph + BFS.
- **[Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)** — *Hard* — DFS mit Memoization.
- **[Bus Routes](https://leetcode.com/problems/bus-routes/)** — *Hard* — BFS auf Bus-Linien-Graph.
- **[Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)** — *Hard* — Alle kürzesten Pfade.
- **[Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)** — *Hard* — BFS mit Bitmask-State.
- **[Couples Holding Hands](https://leetcode.com/problems/couples-holding-hands/)** — *Hard* — Union-Find oder Greedy.
- **[Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)** — *Hard* — BFS auf Zustandsraum.

---

## 14. Advanced Graphs (13)

### Medium
- **[Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)** — *Medium* — Prim's MST, sanfter Einstieg.
- **[Network Delay Time](https://leetcode.com/problems/network-delay-time/)** — *Medium* — Dijkstra-Standardproblem.
- **[Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)** — *Medium* — Bellman-Ford oder modifiziertes Dijkstra.
- **[Path with Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)** — *Medium* — Modified Dijkstra mit Max-Edge.
- **[Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)** — *Medium* — Union-Find Standard.
- **[Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)** — *Medium* — Floyd-Warshall.

### Hard
- **[Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)** — *Hard* — Hierholzer's Algorithm, Eulerian Path.
- **[Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)** — *Hard* — Binary Search + Dijkstra-Variante.
- **[Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)** — *Medium* — Dijkstra mit Max-Heap (Hard-Niveau).
- **[Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)** — *Hard* — 0-1 BFS.
- **[Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)** — *Hard* — Tarjan's Bridge-Finding-Algorithm.
- **[Minimize Malware Spread](https://leetcode.com/problems/minimize-malware-spread/)** — *Hard* — Union-Find mit Component-Größen.
- **[Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)** — *Medium* — Dijkstra + DP (Hard-Niveau).

---

## 15. Greedy (20)

### Easy
- **[Assign Cookies](https://leetcode.com/problems/assign-cookies/)** — *Easy* — Sortier-basiertes Greedy, einfachster Einstieg.
- **[Lemonade Change](https://leetcode.com/problems/lemonade-change/)** — *Easy* — Greedy-Wechselgeld-Problem.
- **[Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)** — *Easy* — Greedy-Profit-Sammeln.
- **[Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)** — *Easy* — Lokale Entscheidungen mit Lookahead.
- **[Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/)** — *Easy* — Sortieren + Greedy-Pick.
- **[Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)** — *Easy* — Sortier-basiertes Knapsack-Greedy.
- **[Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)** — *Easy* — Greedy mit Differenz-Sortierung.

### Medium
- **[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)** — *Medium* — Kadane's Algorithm, Brücke zwischen Greedy und DP.
- **[Jump Game](https://leetcode.com/problems/jump-game/)** — *Medium* — Greedy-Erreichbarkeit.
- **[Jump Game II](https://leetcode.com/problems/jump-game-ii/)** — *Medium* — BFS-artiges Greedy.
- **[Gas Station](https://leetcode.com/problems/gas-station/)** — *Medium* — Klassiker für Greedy-Beweise.
- **[Hand of Straights](https://leetcode.com/problems/hand-of-straights/)** — *Medium* — Greedy mit sortierter Map.
- **[Partition Labels](https://leetcode.com/problems/partition-labels/)** — *Medium* — Greedy mit Last-Index-Tracking.
- **[Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)** — *Medium* — Greedy mit Range-Tracking.
- **[Dota2 Senate](https://leetcode.com/problems/dota2-senate/)** — *Medium* — Greedy mit zwei Queues.
- **[Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)** — *Medium* — Greedy + Bitmask.

### Hard
- **[Candy](https://leetcode.com/problems/candy/)** — *Hard* — Two-Pass Greedy.
- **[Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)** — *Hard* — Greedy + Monotonic Stack.
- **[Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)** — *Hard* — Greedy mit Heap.
- **[Patching Array](https://leetcode.com/problems/patching-array/)** — *Hard* — Mathematisches Greedy.

---

## 16. 1D Dynamic Programming (47)

### Easy
- **[Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)** — *Easy* — Fibonacci-Variante, DP-Einstieg par excellence.
- **[Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)** — *Easy* — Memoization-Grundübung.
- **[N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)** — *Easy* — Erweiterung von Fibonacci.
- **[Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)** — *Easy* — Klassisches DP mit zwei Optionen.
- **[Counting Bits](https://leetcode.com/problems/counting-bits/)** — *Easy* — Bit-DP, ungewohnter Übergang.
- **[Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)** — *Easy* — DP-Konstruktion Zeile für Zeile.
- **[Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/)** — *Easy* — Mit O(k) Space-Optimierung.
- **[Is Subsequence](https://leetcode.com/problems/is-subsequence/)** — *Easy* — Greedy mit DP-Denken.
- **[Divisor Game](https://leetcode.com/problems/divisor-game/)** — *Easy* — Game-Theory-DP, Pattern erkennen.
- **[Get Maximum in Generated Array](https://leetcode.com/problems/get-maximum-in-generated-array/)** — *Easy* — DP-Konstruktion mit Regel.
- **[Maximum Score From Removing Stones](https://leetcode.com/problems/maximum-score-from-removing-stones/)** — *Easy* — Greedy/DP-Pattern.
- **[Maximum Repeating Substring](https://leetcode.com/problems/maximum-repeating-substring/)** — *Easy* — String-DP.
- **[Count Square Sum Triples](https://leetcode.com/problems/count-square-sum-triples/)** — *Easy* — Brute Force mit DP-Optimierung.

### Medium
- **[House Robber](https://leetcode.com/problems/house-robber/)** — *Medium* — Standard „take or skip"-DP.
- **[House Robber II](https://leetcode.com/problems/house-robber-ii/)** — *Medium* — Zirkuläre Variante, zwei DP-Läufe.
- **[Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)** — *Medium* — Expand-around-center oder DP.
- **[Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)** — *Medium* — Zähl-Variante.
- **[Coin Change](https://leetcode.com/problems/coin-change/)** — *Medium* — Unbounded Knapsack, kanonisch.
- **[Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)** — *Medium* — O(n²) DP + O(n log n) Binary Search.
- **[Word Break](https://leetcode.com/problems/word-break/)** — *Medium* — String-DP mit Dictionary.
- **[Decode Ways](https://leetcode.com/problems/decode-ways/)** — *Medium* — Edge-Case-lastiges DP.
- **[Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)** — *Medium* — DP mit Min/Max-Tracking.
- **[Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)** — *Medium* — Subset-Sum-Variante.
- **[Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)** — *Medium* — DP statt Backtracking.
- **[Perfect Squares](https://leetcode.com/problems/perfect-squares/)** — *Medium* — Coin-Change-Variante.
- **[Integer Break](https://leetcode.com/problems/integer-break/)** — *Medium* — DP oder Math.
- **[Delete and Earn](https://leetcode.com/problems/delete-and-earn/)** — *Medium* — House Robber Variante.
- **[Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)** — *Medium* — DP mit Lookback.
- **[Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)** — *Medium* — DP mit Tiling-Pattern.
- **[Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)** — *Medium* — LIS mit Counting.
- **[Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)** — *Medium* — Zwei DP-Arrays.
- **[Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)** — *Medium* — State Machine DP.
- **[Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)** — *Medium* — DP mit Positive/Negative Tracking.
- **[Stone Game](https://leetcode.com/problems/stone-game/)** — *Medium* — Game Theory DP.
- **[Knight Dialer](https://leetcode.com/problems/knight-dialer/)** — *Medium* — DP auf Graph-Übergängen.
- **[Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/)** — *Medium* — DP mit Wahl.
- **[Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)** — *Medium* — Sliding Window auf sortiertem Array.
- **[Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/)** — *Medium* — DP mit „take-and-skip" Pattern.

### Hard
- **[Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)** — *Hard* — LIS in 2D.
- **[Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)** — *Hard* — State Machine mit max. 2 Transaktionen.
- **[Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)** — *Hard* — State Machine mit k Transaktionen.
- **[Frog Jump](https://leetcode.com/problems/frog-jump/)** — *Hard* — DP mit Set-State.
- **[Concatenated Words](https://leetcode.com/problems/concatenated-words/)** — *Hard* — Word Break-Erweiterung.
- **[Number of Ways to Form a Target String Given a Dictionary](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)** — *Hard* — Counting-DP.
- **[Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)** — *Hard* — DP + Binary Search.
- **[Stone Game II](https://leetcode.com/problems/stone-game-ii/)** — *Medium* — Game DP mit Memoization (Hard-Niveau).
- **[Maximum Score from Performing Multiplication Operations](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/)** — *Hard* — DP mit Index-Paaren.

---

## 17. 2D Dynamic Programming (43)

### Easy
- **[Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/)** — *Easy* — Palindrom-Check, Wärmeübung.
- **[Count Substrings That Differ by One Character](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/)** — *Medium* — Aber lehrreich für 2D-Pattern (offiziell Medium).
- **[Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)** — *Easy* — Counting-basiert, Vorbereitung.
- **[Robot Return to Origin](https://leetcode.com/problems/robot-return-to-origin/)** — *Easy* — Grid-Coordinate-Tracking.
- **[Day of the Year](https://leetcode.com/problems/day-of-the-year/)** — *Easy* — Tabular Lookup, einfache 2D-Vorübung.
- **[Determine if String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/)** — *Easy* — Two-Pointer-Vergleich.

### Medium
- **[Unique Paths](https://leetcode.com/problems/unique-paths/)** — *Medium* — Grid-DP-Einstieg.
- **[Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)** — *Medium* — Mit Hindernissen.
- **[Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)** — *Medium* — Grid-DP mit Kosten.
- **[Triangle](https://leetcode.com/problems/triangle/)** — *Medium* — Bottom-up DP auf Dreieck.
- **[Maximal Square](https://leetcode.com/problems/maximal-square/)** — *Medium* — 2D-DP mit Min-Aggregation.
- **[Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)** — *Medium* — String-DP-Klassiker.
- **[Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)** — *Medium* — State Machine DP, drei Zustände.
- **[Coin Change II](https://leetcode.com/problems/coin-change-ii/)** — *Medium* — Kombinationen statt Minimum.
- **[Target Sum](https://leetcode.com/problems/target-sum/)** — *Medium* — Subset-Sum-Variante mit Vorzeichen.
- **[Edit Distance](https://leetcode.com/problems/edit-distance/)** — *Medium* — Levenshtein-Distance.
- **[Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)** — *Medium* — 2D-Knapsack.
- **[Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)** — *Medium* — Subset-Sum-Variante.
- **[Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)** — *Medium* — Grid-DP mit Steps.
- **[Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)** — *Medium* — DP mit Wahrscheinlichkeiten.
- **[Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)** — *Hard* — Prefix Sum + HashMap (offiziell Hard, hier eingeordnet).
- **[Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)** — *Medium* — String-DP, ähnlich LCS.
- **[Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)** — *Medium* — Variante von Maximal Square.
- **[Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)** — *Hard* — 3D-DP, hier als Bonus (offiziell Hard).
- **[Stone Game III](https://leetcode.com/problems/stone-game-iii/)** — *Hard* — Game DP (Hard-Niveau).
- **[Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)** — *Hard* — Multi-State Knapsack.
- **[Number of Ways to Paint N x 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)** — *Hard* — Grid-Coloring DP.
- **[Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)** — *Medium* — Grid-DP klassisch.
- **[Minimum Path Cost in a Grid](https://leetcode.com/problems/minimum-path-cost-in-a-grid/)** — *Medium* — Grid-DP mit Edge-Kosten.

### Hard
- **[Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)** — *Hard* — Pattern-DP mit Sonderzeichen.
- **[Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)** — *Hard* — Variante mit anderen Wildcards.
- **[Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)** — *Hard* — String-Counting-DP.
- **[Interleaving String](https://leetcode.com/problems/interleaving-string/)** — *Medium* — 2D-DP auf zwei Strings (Hard-Niveau).
- **[Burst Balloons](https://leetcode.com/problems/burst-balloons/)** — *Hard* — Interval DP, ungewöhnlicher Trick.
- **[Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)** — *Hard* — DP mit Palindrome-Precomputation.
- **[Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)** — *Hard* — LCS-basiertes DP.
- **[Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)** — *Hard* — DP oder Stack.
- **[Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)** — *Hard* — Histogram-basiertes 2D-DP.
- **[Dungeon Game](https://leetcode.com/problems/dungeon-game/)** — *Hard* — Reverse Grid-DP.
- **[Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)** — *Hard* — 4D-DP, sehr anspruchsvoll.
- **[Scramble String](https://leetcode.com/problems/scramble-string/)** — *Hard* — Memoization mit String-Splits.
- **[Tallest Billboard](https://leetcode.com/problems/tallest-billboard/)** — *Hard* — Differenz-basiertes Subset-DP.
- **[Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists/)** — *Hard* — DP mit Inclusion-Exclusion.

---

## Statistik

**365 Aufgaben · 17 Kategorien · 0 Premium-Aufgaben**

| Schwierigkeit | Anzahl | Anteil |
|---|---|---|
| Easy | 122 | 33% |
| Medium | 170 | 47% |
| Hard | 73 | 20% |

**Hinweis:** Die Schwierigkeitsangaben in der Tabelle folgen der Sektions-Einordnung. Einzelne Aufgaben sind aus didaktischen Gründen in eine andere Sektion einsortiert als ihr offizielles LeetCode-Tag (vermerkt am Aufgabentitel mit *Easy/Medium/Hard*).

**Empfehlung:** Eine Aufgabe pro Tag = ein Jahr DSA-Praxis von Arrays bis 2D Dynamic Programming.
