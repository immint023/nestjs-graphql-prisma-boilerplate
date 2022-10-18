import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;
}
