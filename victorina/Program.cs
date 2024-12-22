Console.WriteLine("Сколько стоит хлеб?");
int sum = 0;
int ans = int.Parse(Console.ReadLine());
switch (ans)
{
    case 15:
        sum += 10;
        Console.WriteLine($"ответ верный, +10 очков! к счету. Текущий: {sum}");
        break;
    default:
        Console.WriteLine($"ответ неверный Текущий счёт: {sum}");
        break;
}
Console.WriteLine("Сколько стоит молоко?");
string ans1 = Console.ReadLine();
switch (ans1.ToLower().Trim())
{
    case "sp70":
        sum += 10;
        Console.WriteLine($"ответ верный, +10 очков! к счету. Текущий: {sum}");
        break;
    default:
        Console.WriteLine($"ответ неверный Текущий счёт: {sum}");
        break;
}
Console.WriteLine(sum);