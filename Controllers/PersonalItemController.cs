using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticaFinalJaimeZavala.Models;


namespace PracticaFinalJaimeZavala.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalItemController : ControllerBase
    {

        private readonly PracticaFinalReactContext _dbcontext;

        public PersonalItemController( PracticaFinalReactContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<ActionResult> Lista() {

            List<Personaltem> Lista = await _dbcontext.Personaltems.OrderByDescending(p => p.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, Lista);

        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<ActionResult> Guardar([FromBody] Personaltem request)
        {
            await _dbcontext.Personaltems.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<ActionResult> Editar([FromBody] Personaltem request)
        {
            _dbcontext.Personaltems.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            Personaltem personaltem = _dbcontext.Personaltems.Find(id);

            _dbcontext.Personaltems.Remove(personaltem);
            await _dbcontext.SaveChangesAsync();
            
            return StatusCode(StatusCodes.Status200OK, "ok");

        }

    }
}
