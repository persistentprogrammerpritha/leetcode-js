class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        row_len  = len(matrix)
        col_len = len(matrix[0])
        res = 0
        for r in range(row_len):
            for c in range(col_len):
                if matrix[r][c] == 1:
                    #edge
                    if r == 0 or c == 0:
                        res += 1
                    else:
                        cur = min(matrix[r-1][c], matrix[r-1][c-1], matrix[r][c-1]) + matrix[r][c]
                        res += cur
                        matrix[r][c] = cur
        return res
