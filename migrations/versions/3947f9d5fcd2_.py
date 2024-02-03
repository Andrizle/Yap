"""empty message

Revision ID: 3947f9d5fcd2
Revises: 61a289347a57
Create Date: 2024-02-01 23:11:13.493371

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3947f9d5fcd2'
down_revision = '61a289347a57'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.alter_column('hours',
               existing_type=sa.VARCHAR(),
               type_=sa.JSON(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.alter_column('hours',
               existing_type=sa.JSON(),
               type_=sa.VARCHAR(),
               existing_nullable=True)

    # ### end Alembic commands ###
