//age calculator
#include <stdio.h>
void main()
{
int by, cy;
printf("Welcome to the age calculator! \nPlease enter your birth year.\n");
scanf("%d", &by);
printf("Enter current year\n");
scanf("%d", &cy);
int oa, ya;
oa=cy-by;
ya=oa-1;
printf("Your age is either %d years or %d years", ya , oa);
}
