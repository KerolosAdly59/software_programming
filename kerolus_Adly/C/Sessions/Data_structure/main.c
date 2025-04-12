#include <stdio.h>

#define Data_Tybe char
#define max_Size 10

typedef struct {
    Data_Tybe elements[max_Size];
    int top;
} stack;

void Inti(stack* ptr_stack);
int IsFull(stack* ptr_stack);
int IsEmpty(stack* ptr_stack);
int push(Data_Tybe element, stack* ptr_stack);
int pop(Data_Tybe* ptr_element, stack* ptr_stack);
int stack_Size(stack* ptr_stack);
void Clear_stack(stack* ptr_stack);
void print_stack(stack* ptr_stack);
void push_from_user(stack* ptr_stack);

int main() {
    stack s;
    Inti(&s);

    // Testing the new functions

    push_from_user(&s);
    print_stack(&s);
    push_from_user(&s);
    print_stack(&s);
    Data_Tybe x;


    while (pop(&x, &s))
    {
printf("Popped: %c\n", x);
    }


    return 0;
}

void Inti(stack* ptr_stack) {
    ptr_stack->top = -1;
}

int IsFull(stack* ptr_stack) {
    return (ptr_stack->top == max_Size - 1);
}

int IsEmpty(stack* ptr_stack)
{
    return (ptr_stack->top == -1);
}

int push(Data_Tybe element, stack* ptr_stack)
{
    if (IsFull(ptr_stack)) return 0;
    ptr_stack->top++;
    ptr_stack->elements[ptr_stack->top] = element;
    return 1;
}

int pop(Data_Tybe* ptr_element, stack* ptr_stack) {
    if (IsEmpty(ptr_stack)) return 0;
    *ptr_element = ptr_stack->elements[ptr_stack->top];
    ptr_stack->top--;
    return 1;
}

int stack_Size(stack* ptr_stack) {
    return ptr_stack->top + 1;
}

void Clear_stack(stack* ptr_stack) {
    ptr_stack->top = -1;
}

void print_stack(stack* ptr_stack) {
    if (IsEmpty(ptr_stack))
	{
        printf("Stack is empty.\n");
        return;
    }

    printf("Stack contents (top to bottom):\n");
    for (int i = ptr_stack->top; i >= 0; i--) {
        printf("%c ", ptr_stack->elements[i]);
    }
    printf("\n");
}

void push_from_user(stack* ptr_stack)
{
    char element;
    printf("Enter a character to push onto the stack: ");
    scanf(" %c", &element);
    if (push(element, ptr_stack))
		{
        printf("Pushed: %c\n", element);
    } else {
        printf("Stack is full. Cannot push %c\n", element);
    }
}
