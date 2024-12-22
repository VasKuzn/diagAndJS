bool isSucceed = false;
double sum = 0;
double proc = 0;
int num = 0;
while (!isSucceed)
{
    Console.WriteLine("Введите сумму счета");
    string input = Console.ReadLine();
    Console.WriteLine("Введите процент чаевых");
    string input1 = Console.ReadLine();
    Console.WriteLine("Введите кол-во человек в группе");
    string input2 = Console.ReadLine();
    isSucceed = double.TryParse(input, out sum) && double.TryParse(input1, out proc) && Int32.TryParse(input2, out num);
    if (isSucceed)
    {
        Console.WriteLine("Успешно");
    }
    else
    {
        Console.WriteLine("НеУспешно введите правильно");
    }
}
double sumsch = (sum * proc) / 100;
double osumsch = sumsch + sum;
double ksum = osumsch / num;
Console.WriteLine($"Сумма чаевых: {sumsch} Общая сумма счета: {osumsch} Сумма на каждого: {ksum}");








