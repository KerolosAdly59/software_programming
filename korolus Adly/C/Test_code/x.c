#include <stdio.h>
#define class   4
#define stage   3
#define numberOfstudent   4

#define namesOfstudent   20

#define prim       0
#define a3dady     1
#define seccndry   2

#define class_0   0
#define class_1   1
#define class_2   2



char name [class] [stage] [numberOfstudent] [namesOfstudent];

int main()
{
int i=0;

for(i=0; i<numberOfstudent; i++)
{
     printf("Enter your Name:\n");
     scanf("%s",name[class_1] [seccndry] [i]);
	 
}  
for(i=0; i<numberOfstudent; i++)
{
    printf("%s\n",name[class_1] [seccndry] [i]);

}  

  return 0;
}

