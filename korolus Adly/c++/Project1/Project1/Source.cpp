#include <iostream>
#include "STDtype.h"
#include "ARR.h"

using namespace std;

int main()
{
    u16 x[9] = { 0,240,123,3,2,10,1,200,4};

    Arr_BubbleSort(x, 10 , 1);

    Arr_DisplayNumber(x, 9);
  
    return 0;
}