#include <iostream>
#include "ARR.h"
#include "STDtype.h"
#define NULL_charcter '\0'
using namespace std;

void Arr_ScanNumber(int* Number, int size)
{
    int counter = 0;
    for (counter = 0;counter < size;counter++)
    {
        cout << "Enter the Number" << counter + 1;
        cin >> Number[counter];
    }
}
void Arr_DisplayNumber(u16* Number, u16 size)
{
    int counter = 0;
    for (counter = 0;counter < size;counter++)
    {
        cout << "the Number " << counter+1 << " = "  << Number[counter] <<"\n";
    }
}

void  Arr_BubbleSort(u16* Number, u16 size, u8 SortType)

{
    u8 counter_1, counter_2;

    for (counter_1 = 0; counter_1 < size - 1; counter_1++)
    {
        if (Number[counter_1] > Number[counter_1 + 1])
        {
            Arr_SwapTwoElement(&Number[counter_1], &Number[counter_1 + 1]);
        }

    }
}

void Arr_SwapTwoElement(u16* x, u16* y)
{
    int temp = 0;
    temp = *x;
    *x = *y;
    *y = temp;

}
