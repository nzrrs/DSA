#include <stdbool.h>

int	ft_len(char *s)
{
	int	i;

	i = 0;
	while (s[i])
		i++;
	return (i);
}

bool	isAnagram(char *s, char *t)
{
	int		frequency[26] = {0};
	bool	is_anagram;
	int		s_len;
	int		t_len;
	int		i;

	s_len = ft_len(s);
	is_anagram = true;
	t_len = ft_len(t);
	if (s_len != t_len)
		return (false);
	i = 0;
	while (s[i])
	{
		frequency[s[i] - 'a']++;
		i++;
	}
	i = 0;
	while (t[i])
	{
		frequency[t[i] - 'a']--;
		i++;
	}
	i = 0;
	while (i < 26)
	{
		if (frequency[i])
			is_anagram = false;
		i++;
	}
	return (is_anagram);
}
