export default function TarjetaUsuario({ usuario }) {
  return (
    <article className="tarjeta-usuario">
      <div className="avatar" aria-hidden="true">
        {usuario.name.charAt(0)}
      </div>

      <h2>{usuario.name}</h2>

      <dl className="datos-usuario">
        <div>
          <dt>Correo electrónico</dt>
          <dd>
            <a href={`mailto:${usuario.email}`}>
              {usuario.email}
            </a>
          </dd>
        </div>

        <div>
          <dt>Ciudad</dt>
          <dd>{usuario.address.city}</dd>
        </div>

        <div>
          <dt>Empresa</dt>
          <dd>{usuario.company.name}</dd>
        </div>
      </dl>
    </article>
  );
}
