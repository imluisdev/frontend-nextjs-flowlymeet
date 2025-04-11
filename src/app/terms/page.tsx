import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-[#7886C7]">
              Términos y Condiciones
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground">
                Al acceder y utilizar FlowlyMeet, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestra plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Uso de la Plataforma</h2>
              <p className="text-muted-foreground mb-4">
                Usted se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Mantener la confidencialidad de su cuenta</li>
                <li>No utilizar la plataforma para fines ilegales</li>
                <li>No interferir con el funcionamiento normal de la plataforma</li>
                <li>Respetar los derechos de otros usuarios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Cuentas de Usuario</h2>
              <p className="text-muted-foreground">
                Es responsable de mantener la confidencialidad de su cuenta y contraseña. Usted acepta notificarnos inmediatamente cualquier uso no autorizado de su cuenta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Contenido del Usuario</h2>
              <p className="text-muted-foreground">
                Usted conserva los derechos de propiedad intelectual sobre el contenido que publique en la plataforma. Al publicar contenido, nos otorga una licencia para usar, modificar y distribuir dicho contenido en relación con nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground">
                FlowlyMeet no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Modificaciones del Servicio</h2>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar o interrumpir, temporal o permanentemente, el servicio con o sin previo aviso. No seremos responsables ante usted o terceros por cualquier modificación, suspensión o interrupción del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Terminación</h2>
              <p className="text-muted-foreground">
                Podemos terminar o suspender su acceso a nuestros servicios inmediatamente, sin previo aviso, por cualquier motivo, incluyendo, entre otros, si usted incumple estos términos y condiciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Ley Aplicable</h2>
              <p className="text-muted-foreground">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Cambios en los Términos</h2>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Le notificaremos sobre cambios significativos a través de la plataforma o por correo electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
              <p className="text-muted-foreground">
                Si tiene preguntas sobre estos términos y condiciones, puede contactarnos en:
                <br />
                <a href="mailto:andreereyes0@gmail.com" className="text-[#7886C7] hover:underline">
                  andreereyes0@gmail.com
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 