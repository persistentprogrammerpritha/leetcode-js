# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    #move this to other repo
    def oddEvenList(self, head: ListNode) -> ListNode:
        if head == None: 
            return None
        odd = head
        even = odd.next
        even_head = even     
        while even != None and even.next != None:
            odd.next = even.next # connect 1 and 3 
            odd = odd.next #move the odd pointer
            even.next = odd.next #connect 2 to 4
            even = even.next #move the even pointer
        odd.next = even_head
        return head
