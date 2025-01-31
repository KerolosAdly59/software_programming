#include <stdio.h>
#include "Arr.h"
#include <stdlib.h>

 struct Bank
	{
		char name[20];
		char age;
		int Bank_Account_ID;
	};
	  struct Bank Bank_Account[10];

int main()
  {
	char x[20];
	printf("Enter your name");
	scanf("%s",&x);
	printf("%s",x);
	//char **name = (char*) malloc(100*sizeof(char) );
	
    /*int     arr1[5];
    char    arr2[5];
    float   arr3[5];
    char    name[20];
    int ErrState=0;
    int SortType ;
    int SearchValue ; 
    int position = -1;
    printf("Enter the name :");
    Arr_EnterName(name);
	Arr_DisplayName(name);*/
}