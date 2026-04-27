using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CadastroPessoas.Data;
using CadastroPessoas.Models;

namespace CadastroPessoas.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoasController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoasController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/pessoas
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var pessoas = await _context.Pessoas.ToListAsync();
        return Ok(pessoas);
    }

    // GET: api/pessoas/1
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);
        if (pessoa == null) return NotFound();
        return Ok(pessoa);
    }

    // POST: api/pessoas
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = pessoa.Id }, pessoa);
    }

    // PUT: api/pessoas/1
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Pessoa pessoaAtualizada)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);
        if (pessoa == null) return NotFound();

        pessoa.Nome = pessoaAtualizada.Nome;
        pessoa.Telefone = pessoaAtualizada.Telefone;
        pessoa.DataNascimento = pessoaAtualizada.DataNascimento;

        await _context.SaveChangesAsync();
        return Ok(pessoa);
    }

    // DELETE: api/pessoas/1
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);
        if (pessoa == null) return NotFound();

        _context.Pessoas.Remove(pessoa);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}