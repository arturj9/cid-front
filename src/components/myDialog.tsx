import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MyDialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Editar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Perfil</DialogTitle>
            <DialogDescription>
              Atualize os dados do seu perfil aqui. Clique em Salvar quando
              estiver pronto.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input id="name-1" name="name" defaultValue="nome" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">E-mail</Label>
              <Input
                id="email-1"
                name="email"
                defaultValue="example@gmail.com"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar mudanças</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
