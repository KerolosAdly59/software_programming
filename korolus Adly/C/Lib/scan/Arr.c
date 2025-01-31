#include "Arr.h"
#include <stdio.h>

void Arr_ScanNumber(int *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("Enter the Number[%d]:",counter+1);
        scanf("%d",&Number[counter]);
    }
}
void Arr_DisplayNumber(int *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("the Number[%d]=%d\n",counter+1,Number[counter]);
    }
}
void Arr_Scanfloat(float *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("Enter the Number[%d]:",counter+1);
        scanf("%f",&Number[counter]);
    }

}
void Arr_Displayfloat(float *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("the Number[%d]=%0.2f\n",counter+1,Number[counter]);
    }
}
void Arr_Scanchar(char *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("Enter the Number[%d]:",counter+1);
        scanf(" %c",Number+counter);
    }
}
void Arr_Displaychar(char *Number,int size)
{
    int counter = 0 ;
    for(counter=0;counter<size;counter++)
    {
        printf("the Number[%d]=%c\n",counter+1,Number[counter]);
    }
}

void Arr_EnterName(char *Name)
{
     printf("Enter your Name:");
     scanf("%[^\n]s",Name);
}
void Arr_DisplayName(char *Name)
{
    printf("Welcom %s\n",Name);
}



int  Arr_BubbleSort(int *Number , int size ,int SortType)
{
    int State = 0; 
    int counter1 = 0 ;
    int counter2 = 0 ;
    if(SortType==1)
    {
        for(counter1=0;counter1<size-1;counter1++)
        {
            for(counter2=0;counter2<size-1-counter1;counter2++)
            {
                if(Number[counter2]>Number[counter2+1])
                {
                    // swap
                    Arr_SwapTwoElement(&Number[counter2],&Number[counter2+1]);
                }
            }
        }
        State = 0 ; 
    }
    else if (SortType==2)
    {

        for(counter1=0;counter1<size-1;counter1++)
        {
            for(counter2=0;counter2<size-1-counter1;counter2++)
            {
                if(Number[counter2]<Number[counter2+1])
                {
                    // swap
                    Arr_SwapTwoElement(&Number[counter2],&Number[counter2+1]);
                }
            }
        }
        State = 0 ;
    }
    else 
    {
        /*Invaild option */
        printf("Arr_BubbleSort : has Problem \n");
        State = -1 ; 

    }
    return State ; 
}

void Arr_SwapTwoElement(int *x , int *y)
{
    int temp = 0 ;
    temp = *x ;
    *x   = *y ;
    *y   = temp ;
    
}


int Arr_BinarySearch(int *Number, int size , int SortType , int SearchValue , int * index)
{
    int State  = 0;
    int Start  = 0;
    int End    = size-1;
    int mid    = 0 ;
    if(SortType==1)
    {
        while(Start<=End)
        {
            mid = (Start+End)/2 ;
            if(Number[mid]==SearchValue)
            {
                *index = mid ; 
                break;
            } 
            else if (Number[mid]>SearchValue)
            {
                End = mid-1;
            }
            else if(Number[mid]<SearchValue)
            {
                Start = mid +1 ; 
            }
            else 
            {
                /*nothing*/
            }
        }
        if(Start>End)
        {
            printf("%d not found\n",SearchValue);
        }
        State = 0 ;
    }
    else if(SortType==2)
    {
        while(Start<=End)
        {
            mid = (Start+End)/2 ;
            if(Number[mid]==SearchValue)
            {
                *index = mid ; 
                break;
            } 
            else if (Number[mid]>SearchValue)
            {
                Start = mid+1;
            }
            else if(Number[mid]<SearchValue)
            {
                End = mid -1 ; 
            }
            else 
            {
                /*nothing*/
            }
        }
        if(Start>End)
        {
            printf("%d not found\n",SearchValue);
        }
        State=0;
    }
    else
    {
        /*Invaild option*/
        State = -1 ;
    }
    return State ;
}