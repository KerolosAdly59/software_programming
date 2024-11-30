#include <stdio.h>

#define arthmatic 1
#define       logic 2
int main()
{
	int   num1;
	int   num2;
	char operation;

	printf("please select any opration\n");
	printf("1- arthmatic\n");
    printf("2- logic\n");
	scanf("%d",&operation);
	
	if(operation == arthmatic)
	{
		printf("please enter num1 = ");
		scanf("%d",&num1);
		printf("please enter arthmatic operation");
		scanf(" %c",&operation);
		printf("please enter num2 = ");
		scanf("%d",&num2);
		 if (operation == '+')
		 {
		   printf("result = %d",num1 + num2);
		   
		 } 
		 
		 else if (operation == '-')
		 {
		   printf("result = %d",num1 - num2);
		   
		 } 
		 
		 else if (operation == '*')
		 {
		   printf("result = %d",num1 * num2);
		   
		 } 
		 
		 
		else if (operation == '/')
		 {
		   printf("result = %.5f",(float)num1 / (float)num2); //this case is called (casting) 	   
		 } 
	}
	else if(operation == logic)
	{
	    printf("please enter num1 = ");
		scanf("%d",&num1);
		printf("please enter logic operation");
		scanf(" %c",&operation);
		printf("please enter num2 = ");
		scanf("%d",&num2);	
		
		if(operation == '&' )
		{
			printf("result of opration num1 %d & num2 %d =  %d",num1,num2,(num1 & num2)   );
		}
		else if(operation == '|')
		{
			printf("result of opration num1 %d | num2 %d =  %d",num1,num2,(num1 | num2)   );
		}
	}

	
	
	


	
	
	
	
	
}
