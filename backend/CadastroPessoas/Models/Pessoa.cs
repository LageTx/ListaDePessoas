using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroPessoas.Models;

[Table("pessoas")]
public class Pessoa
{
    [Column("id")]
    public int Id { get; set; }

    [Column("nome")]
    public string Nome { get; set; } = string.Empty;

    [Column("telefone")]
    public string Telefone { get; set; } = string.Empty;

    [Column("data_nascimento")]
    public DateOnly DataNascimento { get; set; }

    [Column("criado_em")]
    public DateTime CriadoEm { get; set; } = DateTime.Now;
}